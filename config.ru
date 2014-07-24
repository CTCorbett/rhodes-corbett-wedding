require 'rubygems'
require 'bundler'

require "rack/jekyll"
require 'rack-livereload'

Bundler.require



use Rack::LiveReload, :source => :vendored
run Rack::Jekyll.new(:auto => true)