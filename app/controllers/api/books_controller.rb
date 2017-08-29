class Api::BooksController < ApplicationController

  def create
    @book = Book.new(book_params)

    if @book.save
      user = current_user
      user.add_book(@book)
      render "api/books/show"
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def update
    @book = Book.find(params[:id])
    if @book.save
      render "api/books/show"
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:book).permit(:id, :title,
    :author_lastname, :author_firstname, :isbn)
  end
end
