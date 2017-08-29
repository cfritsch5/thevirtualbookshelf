class BookshelfItem < ApplicationRecord
  belongs_to :user
  belongs_to :book

  belongs_to :cover
  belongs_to :spine
  belongs_to :back
end
