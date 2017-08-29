class Api::BookshelfItemsController < ApplicationController
  def index
    user = current_user
    @bookshelf_items = user.bookshelf_items
    # @bookshelf = @bookshelf_items.map do |book| #active record book object
    #   Book.find(book.book_id)
    # end
  end

  def show
  end
  def create
    @user = current_user

    @user.add_book(params[])
  end

  def update
    @user = current_user

    Bookshelf_Item.find_by(user_id: @user.id, book_id: params[:book_id])
  end


end
