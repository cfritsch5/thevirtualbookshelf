class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness, on: :create

  has_many :bookshelf_items
  has_many :books,
  through: :bookshelf_items


  attr_reader :password

  def add_book(book)
    Bookshelf_Item.create!(user_id: self.id, book_id: book.id,
    cover_id: book.covers[0].id, spine_id: book.spines[0].id, back_id: book.backs[0].id)
  end

  def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end
