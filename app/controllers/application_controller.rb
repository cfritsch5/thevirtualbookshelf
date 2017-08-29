require 'oauth'
require 'launchy'
require 'nokogiri'

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token

    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

  def goodreads_script
    apikey = 'Cm0xXvDTsloaBDrJaovEg'
    apipromise = 'RKDItd2Aim27M2XGQkwW5cYEzC4XsTT0YHnZWJ4doxs'

    consumer = OAuth::Consumer.new(apikey,
                                   apipromise,
                                   :site => 'http://www.goodreads.com')

    request_token = consumer.get_request_token
    Launchy.open(request_token.authorize_url)
    sleep(5)
    access_token = request_token.get_access_token

    accesstoken = OAuth::AccessToken.new(consumer, access_token.token, access_token.secret)
    response = accesstoken.get('/api/auth_user')

    doc = Nokogiri.XML(response.body)
    user_id = doc.at(:user).attributes['id']


    shelf_response = accesstoken.get("/shelf/list.xml?user_id=#{user_id}&key=#{apikey}")
    books = accesstoken.get("/review/list/60228944.xml?user_id=#{user_id}&key=#{apikey}&sort=rating")

    puts shelf_response.body
    puts books.body

    doc1 = Nokogiri.XML(books.body)
    isbn = doc1.at(:isbn).content
    puts isbn
  end

end
