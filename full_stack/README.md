# Full-stack Rails

### Setup
- $ rails new full_stack -d postgresql -T -G --skip-git
- $ cd full_stack
- $ rails db:create
- $ rails s
- $ rails g model Herb name:string is_watered:string
- $ rails db:migrate
- created some data in Rails c
- $ rails g controller Herb


### RESTful Routes
- index (done)
  - controller method, AR query for all, saved that info in instance variable, passed to the view, iterate over the set from AR
  - link_to to create an alias on the route, from the show back to the index
  - link_to takes two arguments - the hyperlink/anchor and the path
- show (done)
  - controller method, AR query by id coming from params, saved that in an instance variable and passed it to the view, pull attributes with dot notation
  - link_to to create an alias on the route, used to get from index to show page
- new (done)
  - created a controller method for new, created a form with text field, radio buttons, submit button, clear button
  - link_to from index to new and from new back to index using the routing alias
- create (done)
  - added a create controller method and strong params that allow only particular data into the db
  - added a post route
- destroy (done)
  - Added a destroy controller method that takes an herb by id, redirects after the delete action, route and the alias, reference the alias in a link on the show page
- edit (done)
  - added a controller method that looks for an herb by id
  - copied the form and added the `method: :patch` to the form_with method
  - added a link from show page to edit form
- update (done)
  - added a controller method to update an herb by id
  - added a patch route
