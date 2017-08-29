class Book < ApplicationRecord
  validates :title, presence: true

  has_many :covers
  has_many :spines
  has_many :backs

  has_many :bookshelf_items

  def author
    @author = self.author_lastname + ", " + self.author_firstname
  end 
end
