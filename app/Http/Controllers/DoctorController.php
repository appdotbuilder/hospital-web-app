<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Inertia\Inertia;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $doctors = Doctor::available()
            ->orderBy('specialization')
            ->orderBy('name')
            ->get()
            ->map(function ($doctor) {
                return [
                    'id' => $doctor->id,
                    'name' => $doctor->name,
                    'specialization' => $doctor->specialization,
                    'qualification' => $doctor->qualification,
                    'practice_hours' => date('H:i', strtotime($doctor->practice_start_time)) . ' - ' . date('H:i', strtotime($doctor->practice_end_time)),
                    'working_days' => implode(', ', $doctor->working_days),
                    'phone' => $doctor->phone,
                    'email' => $doctor->email,
                    'bio' => $doctor->bio,
                ];
            });

        return Inertia::render('doctors', [
            'doctors' => $doctors,
        ]);
    }
}