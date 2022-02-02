﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyMoney.Api.Context;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MyMoney.Api.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220202231342_Init")]
    partial class Init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("MyMoney.Api.Models.BillingCycle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("Month")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Year")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("BillingCycles");
                });

            modelBuilder.Entity("MyMoney.Api.Models.Credit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int?>("BillingCycleId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("Value")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("BillingCycleId");

                    b.ToTable("Credits");
                });

            modelBuilder.Entity("MyMoney.Api.Models.Debt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int?>("BillingCycleId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<decimal>("Value")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("BillingCycleId");

                    b.ToTable("Debts");
                });

            modelBuilder.Entity("MyMoney.Api.Models.Credit", b =>
                {
                    b.HasOne("MyMoney.Api.Models.BillingCycle", null)
                        .WithMany("Credits")
                        .HasForeignKey("BillingCycleId");
                });

            modelBuilder.Entity("MyMoney.Api.Models.Debt", b =>
                {
                    b.HasOne("MyMoney.Api.Models.BillingCycle", null)
                        .WithMany("Debts")
                        .HasForeignKey("BillingCycleId");
                });

            modelBuilder.Entity("MyMoney.Api.Models.BillingCycle", b =>
                {
                    b.Navigation("Credits");

                    b.Navigation("Debts");
                });
#pragma warning restore 612, 618
        }
    }
}