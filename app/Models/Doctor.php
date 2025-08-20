<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Doctor
 *
 * @property int $id
 * @property string $name
 * @property string $specialization
 * @property string|null $qualification
 * @property string $practice_start_time
 * @property string $practice_end_time
 * @property array $working_days
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $bio
 * @property bool $is_available
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor query()
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereBio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereIsAvailable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor wherePracticeEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor wherePracticeStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereQualification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereSpecialization($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor whereWorkingDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Doctor available()
 * @method static \Database\Factories\DoctorFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Doctor extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'specialization',
        'qualification',
        'practice_start_time',
        'practice_end_time',
        'working_days',
        'phone',
        'email',
        'bio',
        'is_available',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'working_days' => 'array',
        'is_available' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include available doctors.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }

    /**
     * Get the formatted practice hours.
     *
     * @return string
     */
    public function getPracticeHoursAttribute()
    {
        $startTime = date('H:i', strtotime($this->practice_start_time));
        $endTime = date('H:i', strtotime($this->practice_end_time));
        
        return $startTime . ' - ' . $endTime;
    }

    /**
     * Get the working days as a formatted string.
     *
     * @return string
     */
    public function getWorkingDaysStringAttribute()
    {
        return implode(', ', $this->working_days);
    }
}