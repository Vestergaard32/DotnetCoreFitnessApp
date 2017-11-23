﻿// <auto-generated />
using DotNetCoreFitnessApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace DotNetCoreFitnessApp.Migrations
{
    [DbContext(typeof(FitnessContext))]
    [Migration("20171123102227_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.Activity", b =>
                {
                    b.Property<int>("ActivityId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<DateTime>("TimeStamp");

                    b.Property<int?>("WorkoutId");

                    b.HasKey("ActivityId");

                    b.HasIndex("WorkoutId");

                    b.ToTable("Activities");
                });

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.Exercise", b =>
                {
                    b.Property<int>("ExerciseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<string>("Reps");

                    b.Property<int>("Sets");

                    b.Property<int?>("WorkoutId");

                    b.HasKey("ExerciseId");

                    b.HasIndex("WorkoutId");

                    b.ToTable("Exercises");
                });

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.Workout", b =>
                {
                    b.Property<int>("WorkoutId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("UserId");

                    b.HasKey("WorkoutId");

                    b.HasIndex("UserId");

                    b.ToTable("Workouts");
                });

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.Activity", b =>
                {
                    b.HasOne("DotNetCoreFitnessApp.Models.Workout")
                        .WithMany("Activities")
                        .HasForeignKey("WorkoutId");
                });

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.Exercise", b =>
                {
                    b.HasOne("DotNetCoreFitnessApp.Models.Workout")
                        .WithMany("Exercises")
                        .HasForeignKey("WorkoutId");
                });

            modelBuilder.Entity("DotNetCoreFitnessApp.Models.Workout", b =>
                {
                    b.HasOne("DotNetCoreFitnessApp.Models.User")
                        .WithMany("Workouts")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}