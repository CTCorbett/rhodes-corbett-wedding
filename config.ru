require 'rubygems'
require 'bundler'

Bundler.require

require "rack/jekyll"
# require 'rack-livereload'

# use Rack::LiveReload, :source => :vendored
run Rack::Jekyll.new(:auto => true)