<?php

namespace Database\Seeders;

use App\Models\Doctor;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create specific doctors for demonstration
        $doctors = [
            [
                'name' => 'Dr. Sarah Johnson',
                'specialization' => 'Cardiology',
                'qualification' => 'MBBS, MD (Cardiology)',
                'practice_start_time' => '09:00:00',
                'practice_end_time' => '17:00:00',
                'working_days' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'phone' => '+1-555-0101',
                'email' => 'sarah.johnson@hospital.com',
                'bio' => 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions and cardiovascular diseases.',
                'is_available' => true,
            ],
            [
                'name' => 'Dr. Michael Chen',
                'specialization' => 'Neurology',
                'qualification' => 'MBBS, DM (Neurology)',
                'practice_start_time' => '08:00:00',
                'practice_end_time' => '16:00:00',
                'working_days' => ['Monday', 'Wednesday', 'Friday', 'Saturday'],
                'phone' => '+1-555-0102',
                'email' => 'michael.chen@hospital.com',
                'bio' => 'Specialized in neurological disorders and brain surgery, Dr. Chen has published numerous research papers in leading medical journals.',
                'is_available' => true,
            ],
            [
                'name' => 'Dr. Emily Rodriguez',
                'specialization' => 'Pediatrics',
                'qualification' => 'MBBS, MD (Pediatrics)',
                'practice_start_time' => '10:00:00',
                'practice_end_time' => '18:00:00',
                'working_days' => ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
                'phone' => '+1-555-0103',
                'email' => 'emily.rodriguez@hospital.com',
                'bio' => 'Dr. Rodriguez specializes in child healthcare and has been working with children for over 12 years, focusing on preventive care.',
                'is_available' => true,
            ],
            [
                'name' => 'Dr. James Wilson',
                'specialization' => 'Orthopedics',
                'qualification' => 'MBBS, MS (Orthopedics)',
                'practice_start_time' => '07:00:00',
                'practice_end_time' => '15:00:00',
                'working_days' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'phone' => '+1-555-0104',
                'email' => 'james.wilson@hospital.com',
                'bio' => 'Expert in bone and joint surgery, Dr. Wilson has performed over 2000 successful orthopedic surgeries.',
                'is_available' => true,
            ],
            [
                'name' => 'Dr. Lisa Thompson',
                'specialization' => 'Emergency Medicine',
                'qualification' => 'MBBS, MD (Emergency Medicine)',
                'practice_start_time' => '00:00:00',
                'practice_end_time' => '23:59:00',
                'working_days' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                'phone' => '+1-555-0105',
                'email' => 'lisa.thompson@hospital.com',
                'bio' => 'Dr. Thompson leads our emergency department and is available 24/7 for critical cases and emergency situations.',
                'is_available' => true,
            ],
        ];

        foreach ($doctors as $doctorData) {
            Doctor::create($doctorData);
        }

        // Create additional random doctors
        Doctor::factory(15)->create();
    }
}