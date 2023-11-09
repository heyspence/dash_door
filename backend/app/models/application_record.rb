class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def current_user
    
  end

  def logged_in?
  end

  def login!(user)
  end

  def logout!
  end
end
