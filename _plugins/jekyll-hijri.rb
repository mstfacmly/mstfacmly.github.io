require 'mini_i18n'
require 'hijri'
    module Jekyll
	module Hijri
	    extend self 

	    def hijri(date = Date::Hijri, options = {})
	        Core.hijri(date, options)
	    end
	end
    end

MiniI18n.configure do |config|
	config.load_translations(__dir__ + '/locales/*.yml')
end
