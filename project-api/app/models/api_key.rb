class ApiKey < ApplicationRecord
  before_create :generate_access_token

  private

  def generate_access_token
    begin
      self.token = SecureRandom.hex
    end while self.class.exists?(token: token)
  end
end
