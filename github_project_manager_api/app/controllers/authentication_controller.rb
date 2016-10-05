class AuthenticationController < ApplicationController

 def authenticate_user
   byebug
    user = User.find_by(username: params[:username])
    if user.authenticate(params[:password])
      render json: payload(user)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
 end

  private

  def payload(user)
    return nil unless user and user.id
    {
      auth_token: JsonWebToken.encode({user_id: user.id}),
      user: {id: user.id, username: user.username}
    }
  end

end
