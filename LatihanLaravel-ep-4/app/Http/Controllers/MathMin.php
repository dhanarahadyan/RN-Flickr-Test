<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MathMin extends Controller
{
    public function index() {
//logic
$a = 25;
$b = 25;
$sum = $a + $b;

return 'outputnya is '.$sum;
}

public function testing(){
    return view('welcome');
}
}
