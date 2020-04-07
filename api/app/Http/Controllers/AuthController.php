<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!User::where('email', $request->email)->exists()) {
            $user = User::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'password' => Hash::make($request->password),
            ]);

            auth()->login($user);
            $token = $user->createToken('twitter-app-token')->plainTextToken;

            return $this->respondWithToken($token);
        } else {
            return response()->json(['error' => 'User with email  ' . $request->email . ' already exist.'], 401);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['Unauthorized. Please check the correctness of your credentials.']
            ], 401);
        }

        $token = $user->createToken('twitter-app-token')->plainTextToken;

        return $this->respondWithToken($token);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->where('tokenable_id', $request->user()->id)->delete();
        return response()->json(['message' => 'Successfully logged out'], 201);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
        ], 201 );
    }

    public function getAuthenticatedUser(Request $request)
    {
        $user = $request->user();
        if (!$user ) {
            return response()->json(['error' => 'User not found'], 401);
        }
        return response()->json($user, 200);
    }
}
