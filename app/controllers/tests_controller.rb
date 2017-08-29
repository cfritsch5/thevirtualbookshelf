require 'oauth'
require 'launchy'
require 'nokogiri'


class TestsController < ApplicationController
	@@apikey = 'Cm0xXvDTsloaBDrJaovEg'
	@@apipromise = 'RKDItd2Aim27M2XGQkwW5cYEzC4XsTT0YHnZWJ4doxs'

	def index
		@consumer = OAuth::Consumer.new(@@apikey,
		                               @@apipromise,
		                               :site => 'http://www.goodreads.com')
		@request_token = @consumer.get_request_token
		@authurl = @request_token.authorize_url
		# Launchy.open(@request_token.authorize_url)
		# sleep(5)
		# @access_token = @request_token.get_access_token
		#
		# @accesstoken = OAuth::AccessToken.new(@consumer, @access_token.token, @access_token.secret)
		# @response = @accesstoken.get('/api/auth_user')
		#
		# doc = Nokogiri.XML(@response.body)
		# # puts doc
		# user_id = doc.at(:user).attributes['id']
		# puts "user_id", user_id
		#
		# puts "TEST CONROLLER !!@@@!!!@!@@!@@!@!@!@!@!@!@!@@@!!!!!!!!!!!!!!!!"
	end

	def update

	end

end
