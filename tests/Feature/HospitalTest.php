<?php

use App\Models\Doctor;
use App\Models\Room;
use Inertia\Testing\AssertableInertia as Assert;

test('hospital home page displays doctors and room statistics', function () {
    // Create test data
    Doctor::factory()->create([
        'name' => 'Dr. Test Smith',
        'specialization' => 'Cardiology',
        'is_available' => true,
    ]);

    Room::factory()->create([
        'type' => 'Standard',
        'status' => 'available',
    ]);

    Room::factory()->create([
        'type' => 'Standard',
        'status' => 'occupied',
    ]);

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->has('doctors')
        ->has('roomStats')
        ->where('doctors.0.name', 'Dr. Test Smith')
        ->where('doctors.0.specialization', 'Cardiology')
    );
});

test('doctors page displays all available doctors', function () {
    Doctor::factory()->create([
        'name' => 'Dr. John Doe',
        'specialization' => 'Neurology',
        'is_available' => true,
    ]);

    Doctor::factory()->create([
        'name' => 'Dr. Jane Smith',
        'specialization' => 'Pediatrics',
        'is_available' => false, // Should not appear
    ]);

    $response = $this->get('/doctors');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('doctors')
        ->has('doctors', 1) // Only available doctor
        ->where('doctors.0.name', 'Dr. John Doe')
        ->where('doctors.0.specialization', 'Neurology')
    );
});

test('rooms page displays room statistics and detailed room information', function () {
    Room::factory()->create([
        'room_number' => '101',
        'type' => 'Standard',
        'status' => 'available',
        'price_per_day' => 150.00,
    ]);

    Room::factory()->create([
        'room_number' => '201',
        'type' => 'VIP',
        'status' => 'occupied',
        'price_per_day' => 500.00,
    ]);

    $response = $this->get('/rooms');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('rooms')
        ->has('rooms')
        ->has('roomStats')
        ->where('rooms.0.room_number', '101')
        ->where('rooms.0.type', 'Standard')
        ->where('rooms.0.status', 'available')
    );
});

test('about page displays hospital information', function () {
    $response = $this->get('/about');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('about')
    );
});

test('contact page displays contact information', function () {
    $response = $this->get('/contact');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('contact')
        ->has('contactInfo')
        ->where('contactInfo.hospital_name', 'MediCare General Hospital')
        ->where('contactInfo.phone', '+1-555-HOSPITAL (+1-555-467-7482)')
        ->where('contactInfo.emergency', '+1-555-911-HELP (+1-555-911-4357)')
    );
});

test('room statistics are calculated correctly', function () {
    // Create Standard rooms
    Room::factory(5)->create(['type' => 'Standard', 'status' => 'available']);
    Room::factory(3)->create(['type' => 'Standard', 'status' => 'occupied']);
    Room::factory(1)->create(['type' => 'Standard', 'status' => 'maintenance']);

    // Create VIP rooms
    Room::factory(2)->create(['type' => 'VIP', 'status' => 'available']);
    Room::factory(1)->create(['type' => 'VIP', 'status' => 'occupied']);

    $response = $this->get('/');

    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->has('roomStats')
        ->where('roomStats.0.type', 'Standard')
        ->where('roomStats.0.total', 9)
        ->where('roomStats.0.available', 5)
        ->where('roomStats.0.occupied', 3)
        ->where('roomStats.0.maintenance', 1)
        ->where('roomStats.0.occupancy_rate', 33) // 3/9 = 33%
    );
});

test('only available doctors are displayed', function () {
    Doctor::factory()->create(['is_available' => true]);
    Doctor::factory()->create(['is_available' => false]);
    Doctor::factory()->create(['is_available' => true]);

    $response = $this->get('/doctors');

    $response->assertInertia(fn (Assert $page) => $page
        ->component('doctors')
        ->has('doctors', 2) // Only available doctors
    );
});