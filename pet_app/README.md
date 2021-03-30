# Rails

### Intro to Active Record

    rails generate model Dog name:string breed:string age:integer

will create a dog.rb file and a migration file for creating the Dog table.

    rails db:migrate
will actually run the scripts that will tell the database to create the table.

    rails c
 is Rails Console which allows you access the db and perform CRUD (Create Read Update Delete) actions

 For updating instances in the database, you can assign values to instance properties


    churro.age = 15
and you'll need to tell the database to actually do the update using `.save` method

    churro.save

Active Record is the Rails ORM and mostly responsible for the M (model) in MVC.


### Active Record Migrations

Steps for making changes to database:
1. Generate Migration file using `rails g migration AddColumnToTable`
2. Update logic in `change` method to reflect desired changes (use migration definitions)
3. Tell the database to perform the migration using `rails db:migrate`

### Active Record Model Validations

Model Validations - process of ensuring data is valid and suitable for the database

Syntax for providing a model validation
`validates :column_name, validator: conditional`

`validates` - a method that takes a varying number of arguments

When do model validations get run?
Anytime there is an attempt to perform a CRUD action, the validations will run.
The difference between just calling the CRUD method and yelling the method is whether Active Record will yell back.

`.valid?` - a method that also runs the validations without attempting a CRUD action, returns true or false;
if it returns false, it'll add errors on the instance to an instance variable named "errors" (e.g.   instance.errors)

`.errors` - a method that returns the list of errors encountered while running model validations

`belongs_to` associations are default validations

### Model Rspec Testing
To add rspec to project:
`bundle add rspec-rails`

To add boilerplate code for rspec:
`rails generate rspec:install` or
`rails g rspec:install`

To run tests:
`rspec` -run all spec files in app
`rspec spec` -run only spec files in /spec
`rspec spec/models/veterinarian_spec.rb` - target a specific file

### Rails Routes, Views, Controllers

URL - Uniform Resource Locator, the address associated with some way of sending data to an application

https://github.com/learn-academy-2021-alpha

https:// - the protocol, method for sending and receiving data
github - the host
.com - top-level domain

github.com - the domain/host

/learn-academy-2021-alpha - a segment of a path

What is a controller?
It is where actions/methods associated with requests live.
The controller is responsible for handling incoming HTTP requests and providing responses.
The controller orchestrates the interaction between model and view.

What is a resource?
In the HTTP context, a resource is a model.
For example, Dog is a resource.
Can perform CRUD on resource.

Making the connection:
1. generated the controller: $rails g controller Main
2. added an action on the controller that uses the render method to provide a response
3. added a route to associate a URL segment with the action in our controller (Convention:  HTTP_METHOD '/URL_segment' => 'controller#method')

Landing page is what the user sees when they first visit your site.

Syntax for embedding Ruby into HTML:
<%= ruby_code %>
Instance variables are declared in the controller and can be embedded in a view file.

link_to - a method that create a hypertext link, takes two strings as arguments: 1) display text, 2) URL segment of another route


### Rails Params

Parameters allow a developer to pass dynamic information into a controller method.

Passing values into the url to provide the app with more information.

Setting an instance variable to expect params from the url and then assign it a value.

```ruby
@bev_type = params[:type]
```
This defines the params in the url.
http://localhost:3000/beverage?type=coffee


Or you can modify the route to expect the param.
```ruby
get '/beverage/:type' => 'food#beverage'
```
http://localhost:3000/beverage/coffee
