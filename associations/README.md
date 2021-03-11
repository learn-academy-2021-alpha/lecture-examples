# Rails Associations

### Project Setup
- $ rails new associations -d postgresql -T
- cd
- $ rails db:create

### Notes on Naming
- Project name will be the same as the db name and should be different than the table names

### DB Notes
- $ psql, `\l` - to see all the db on your machine
- $ rails db:drop - will drop the existing db, a good thing to do before you delete your Rails project


### Models
- $ rails g model Cookie name:string price:integer allergy:string
- $ rails g model Ingredient name:string amount:string cookie_id:integer
- $ rails db:migrate

### Define Relationships
- In the each model class
- has_many/belongs_to relationship
- The foreign key always lives on the belongs_to side
- Double check pluralization

```
class Cookie < ApplicationRecord
  has_many :ingredients
end

class Ingredient < ApplicationRecord
  belongs_to :cookie
end
```

### Creating Instances
- In Rails console
- Create cookies

```
Cookie.create name: 'Chocolate chip', price: 2, allergy: 'flour'
Cookie.create name: 'Sugar', price: 2, allergy: 'none'
Cookie.create name: 'Snickerdoodle', price: 2, allergy: 'eggs'
```
- Save a single cookie in a variable and create ingredients for that cookie

```
cc = Cookie.first
cc.ingredients.create name: 'flour', amount: '2 cups'
cc.ingredients.create name: 'sugar', amount: '1 1/2 cups'
```
- List all the ingredients that belong to a particular instance

```
cc.ingredients
```
