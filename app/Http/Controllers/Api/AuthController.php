<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Validator;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', [
            'except' => [
                'login',
                'registerEmployer',
                
            ]]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator =Validator::make($request->all(),[
            'email'=>'required|email|string|unique:users',
            'password'=>'required|min:8|string'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $loginCredentials = $request->only('email', 'password');
        $remember_me = $request->has('remember') ? true : false; 

        if ($token = $this->guard()->attempt($loginCredentials,$remember_me)) {
            return $this->respondWithToken($token);
            
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function registerEmployer(Request $request){
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|between:2,100',
            'lastName' => 'required|string|between:2,100',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8',
            'password_confirmation' => 'required|same:password',
            
            
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $user = User::create(array_merge(
            $validator->validated(),
            [
                'password' => bcrypt($request->password),
                'role_id'=>4,
                'country'=>$request->country,
                'phoneNumber'=>$request->phoneNumber
            ]
        ));

        $email =$user->email;
        $password=$user->password;

        // return response()->json([$email,$password],200);
        $token = auth()->login($user);

        return $this->respondWithToken($token);

        // $this->login($user->email,$user->password);
        // return response()->json([
        //     'message' => 'User successfully registered',
        //     'user' => $user
        // ], 201);

    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json($this->guard()->user());
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user'=>$this->guard()->user(),
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60
        ]);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }


}
