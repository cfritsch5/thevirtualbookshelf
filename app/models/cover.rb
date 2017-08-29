class Cover < ApplicationRecord
  validates :image_url, presence: true

  belongs_to :book
  has_many :bookshelf_items
end
