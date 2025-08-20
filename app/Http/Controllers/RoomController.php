<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get detailed room information
        $rooms = Room::orderBy('type')
            ->orderBy('room_number')
            ->get()
            ->map(function ($room) {
                return [
                    'id' => $room->id,
                    'room_number' => $room->room_number,
                    'type' => $room->type,
                    'status' => $room->status,
                    'formatted_status' => ucfirst($room->status),
                    'price_per_day' => $room->price_per_day ? '$' . number_format($room->price_per_day, 2) : null,
                    'floor' => $room->floor,
                    'amenities' => $room->amenities ? implode(', ', $room->amenities) : '',
                    'description' => $room->description,
                ];
            });

        // Get room statistics
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

        return Inertia::render('rooms', [
            'rooms' => $rooms,
            'roomStats' => $roomStats,
        ]);
    }
}