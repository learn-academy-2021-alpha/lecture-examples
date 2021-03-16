class MainController < ApplicationController
  def hello
    render html: 'HELLO WORLD!'
    # <html><body>HELLO WORLD!</body><html>
  end

  def reminder
    @number_of_minutes = 30
    render "reminder.html.erb"
  end
end
