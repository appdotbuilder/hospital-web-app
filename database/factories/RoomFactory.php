<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['Standard', 'VIP', 'ICU', 'Emergency', 'Operating'];
        $type = fake()->randomElement($types);

        $amenitiesByType = [
            'Standard' => ['Bed', 'TV', 'Bathroom', 'Air Conditioning'],
            'VIP' => ['King Size Bed', 'Smart TV', 'Private Bathroom', 'Mini Fridge', 'Sofa', 'Wi-Fi'],
            'ICU' => ['Ventilator', 'Heart Monitor', 'Defibrillator', 'IV Stand', 'Oxygen Supply'],
            'Emergency' => ['Emergency Equipment', 'Crash Cart', 'Monitors', 'Oxygen'],
            'Operating' => ['Surgical Table', 'Anesthesia Machine', 'Surgical Lights', 'Monitors'],
        ];

        $pricesByType = [
            'Standard' => fake()->randomFloat(2, 100, 300),
            'VIP' => fake()->randomFloat(2, 500, 1000),
            'ICU' => fake()->randomFloat(2, 800, 1500),
            'Emergency' => fake()->randomFloat(2, 400, 800),
            'Operating' => fake()->randomFloat(2, 1000, 2000),
        ];

        return [
            'room_number' => fake()->unique()->numerify('##-###'),
            'type' => $type,
            'status' => fake()->randomElement(['available', 'occupied', 'maintenance']),
            'price_per_day' => $pricesByType[$type],
            'description' => fake()->sentence(8),
            'amenities' => $amenitiesByType[$type],
            'floor' => fake()->numberBetween(1, 10),
        ];
    }

    /**
     * Indicate that the room is available.
     */
    public function available(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'available',
        ]);
    }

    /**
     * Indicate that the room is occupied.
     */
    public function occupied(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'occupied',
        ]);
    }

    /**
     * Set room type.
     */
    public function type(string $type): static
    {
        $amenitiesByType = [
            'Standard' => ['Bed', 'TV', 'Bathroom', 'Air Conditioning'],
            'VIP' => ['King Size Bed', 'Smart TV', 'Private Bathroom', 'Mini Fridge', 'Sofa', 'Wi-Fi'],
            'ICU' => ['Ventilator', 'Heart Monitor', 'Defibrillator', 'IV Stand', 'Oxygen Supply'],
            'Emergency' => ['Emergency Equipment', 'Crash Cart', 'Monitors', 'Oxygen'],
            'Operating' => ['Surgical Table', 'Anesthesia Machine', 'Surgical Lights', 'Monitors'],
        ];

        return $this->state(fn (array $attributes) => [
            'type' => $type,
            'amenities' => $amenitiesByType[$type] ?? ['Basic Amenities'],
        ]);
    }
}