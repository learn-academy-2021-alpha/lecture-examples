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

validates - a method that takes a varying number of arguments

When do model validations get run?
Anytime there is an attempt to perform a CRUD action, the validations will run.
The difference between just calling the CRUD method and yelling the method is whether Active Record will yell back.

.valid? - a method that also runs the validations without attempting a CRUD action, returns true or false;
if it returns false, it'll add errors on the instance to an instance variable named "errors" (e.g.   instance.errors)

.errors - a method that returns the list of errors encountered while running model validations

belong_to assocations are default validations