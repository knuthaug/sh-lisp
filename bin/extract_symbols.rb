#!/usr/bin/ruby

require 'rubygems'
require 'scrubyt'

url = "http://www.lispworks.com/documentation/HyperSpec/Front/X_AllSym.htm"

symbol_list = Scrubyt::Extractor.define do
  fetch url

  symbols '//ul/li' do
  end
end

puts symbol_list.map { |x| x.to_s }.join ","

