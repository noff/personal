# frozen_string_literal: true

set :user, "mkechinov"
server "mkechinov.com", user: fetch(:user), roles: %w[app db web]

set :ssh_options,
    forward_agent: true,
    port: 21212

set :application, "mkechinov_rails"
set :deploy_to, "/home/mkechinov/#{fetch(:application)}"
set :branch, "master"
set :rails_env, "production"

set :default_environment,
    "RUBY_VERSION" => "ruby 2.4.4"
