# Rails

### Intro to Active Record

    `rails generate model Dog name:string breed:string age:integer`

will create a dog.rb file and a migration file for creating the Dog table.

    `rails db:migrate`
will actually run the scripts that will tell the database to create the table.

    `rails c`
 is Rails Console which allows you access the db and perform CRUD (Create Read Update Delete) actions
 
 For updating instances in the database, you can assign values to instance properties
 

    `churro.age = 15`
and you'll need to tell the database to actually do the update using `.save` method

    `churro.save`

Active Record is the Rails ORM and mostly responsible for the M (model) in MVC.