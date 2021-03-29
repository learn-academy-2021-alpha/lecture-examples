# Rails API

- $ rails new api_example -d postgresql -T -G --skip-git
- $ rails db:create
- $ bundle add rspec-rails
- $ rails generate rspec:install
- $ rails g resource Student name:string cohort:string
- $ rails db:migrate
- $ rails routes
- Populated the db with a couple entries
- Index
- Show
- Create
  - In Application Controller add: skip_before_action :verify_authenticity_token
- Destroy
- Update
