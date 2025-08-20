<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $specializations = [
            'Cardiology',
            'Neurology',
            'Orthopedics',
            'Pediatrics',
            'Dermatology',
            'Internal Medicine',
            'Surgery',
            'Emergency Medicine',
            'Psychiatry',
            'Radiology'
        ];

        $workingDaysOptions = [
            ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            ['Monday', 'Wednesday', 'Friday'],
            ['Tuesday', 'Thursday', 'Saturday'],
            ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        ];

        $startHour = fake()->numberBetween(8, 12);
        $endHour = $startHour + fake()->numberBetween(6, 10);

        return [
            'name' => 'Dr. ' . fake()->name(),
            'specialization' => fake()->randomElement($specializations),
            'qualification' => fake()->randomElement(['MBBS, MD', 'MBBS, MS', 'MBBS, DM', 'MBBS, MCh', 'MBBS, DNB']),
            'practice_start_time' => sprintf('%02d:00:00', $startHour),
            'practice_end_time' => sprintf('%02d:00:00', min($endHour, 20)),
            'working_days' => fake()->randomElement($workingDaysOptions),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->email(),
            'bio' => fake()->paragraph(3),
            'is_available' => fake()->boolean(90), // 90% chance of being available
        ];
    }

    /**
     * Indicate that the doctor is not available.
     */
    public function unavailable(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_available' => false,
        ]);
    }

    /**
     * Set specific specialization.
     */
    public function specialization(string $specialization): static
    {
        return $this->state(fn (array $attributes) => [
            'specialization' => $specialization,
        ]);
    }
}