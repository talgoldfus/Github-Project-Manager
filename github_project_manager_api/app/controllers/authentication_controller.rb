class AuthenticationController < ApplicationController

 def authenticate_user
    user = User.find_by(username: params[:username])
    if user.authenticate(params[:password])
      render json: payload(user)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
 end

 def logout
   render json: {logout: 'Successful'}
   @current_user = nil
   reset_session
 end

 def auth_token
   auth_token= JsonWebToken.decode(request.headers['Authorization'].split(' ').last)
   current_user = User.find(auth_token[:user_id])
   if current_user
     render json: {
       status: 'Valid' ,
       user: current_user.username ,
       connected: current_user.gh_token ? true : false
     }
   else
     render json: {status: 'Expired' }
   end
 end

  private

  def payload(user)
    return nil unless user and user.id
    connected = user.gh_token ? true : false
    {
      auth_token: JsonWebToken.encode({user_id: user.id}),
      user: {id: user.id, username: user.username ,connected: connected}
    }
  end

end
