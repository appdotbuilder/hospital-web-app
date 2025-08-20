<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create specific room types with controlled distribution
        $roomTypes = [
            ['type' => 'Standard', 'count' => 30],
            ['type' => 'VIP', 'count' => 10],
            ['type' => 'ICU', 'count' => 8],
            ['type' => 'Emergency', 'count' => 5],
            ['type' => 'Operating', 'count' => 4],
        ];

        foreach ($roomTypes as $roomType) {
            // Create available rooms (70% of each type)
            $availableCount = (int) ($roomType['count'] * 0.7);
            Room::factory($availableCount)
                ->type($roomType['type'])
                ->available()
                ->create();

            // Create occupied rooms (25% of each type)
            $occupiedCount = (int) ($roomType['count'] * 0.25);
            Room::factory($occupiedCount)
                ->type($roomType['type'])
                ->occupied()
                ->create();

            // Create maintenance rooms (5% of each type)
            $maintenanceCount = $roomType['count'] - $availableCount - $occupiedCount;
            if ($maintenanceCount > 0) {
                Room::factory($maintenanceCount)
                    ->type($roomType['type'])
                    ->state(['status' => 'maintenance'])
                    ->create();
            }
        }
    }
}