require 'oauth'

require 'launchy'
require 'nokogiri'

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
# puts doc
user_id = doc.at(:user).attributes['id']
# puts user_id


shelf_response = accesstoken.get("/shelf/list.xml?user_id=#{user_id}&key=#{apikey}")
books = accesstoken.get("/review/list.xml?user_id=#{user_id}&key=#{apikey}&sort=rating")
#
puts shelf_response.body
puts books.body

doc1 = Nokogiri.XML(books.body)
isbn = doc1.at(:isbn).content
# puts isbn
