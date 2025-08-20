<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Room;
use Inertia\Inertia;

class HospitalController extends Controller
{
    /**
     * Display the hospital homepage with all sections.
     */
    public function index()
    {
        // Get doctors with their schedules
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
                    'bio' => $doctor->bio,
                ];
            });

        // Get room availability statistics
        $roomStats = [];
        $roomTypes = ['Standard', 'VIP', 'ICU', 'Emergency', 'Operating'];
        
        foreach ($roomTypes as $type) {
            $total = Room::where('type', $type)->count();
            $occupied = Room::where('type', $type)->where('status', 'occupied')->count();
            $available = Room::where('type', $type)->where('status', 'available')->count();
            $maintenance = Room::where('type', $type)->where('status', 'maintenance')->count();
            
            $roomStats[] = [
                'type' => $type,
                'total' => $total,
                'occupied' => $occupied,
                'available' => $available,
                'maintenance' => $maintenance,
                'occupancy_rate' => $total > 0 ? round(($occupied / $total) * 100) : 0,
            ];
        }

        return Inertia::render('welcome', [
            'doctors' => $doctors,
            'roomStats' => $roomStats,
        ]);
    }
}