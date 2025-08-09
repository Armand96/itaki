

"use client";
import React from 'react';
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon';

interface FormData {
  Fname: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup
  .object({
    Fname: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone"),
    message: yup.string().required().label("Message"),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      toast.error("Failed to send message");
      console.error('Submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="luminix-main-field">
        <input type="text" placeholder='Nama' {...register("Fname")} />
        <p className="form_error">{errors.Fname?.message}</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="luminix-main-field">
            <input type="email" placeholder='Email' {...register("email")} />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="luminix-main-field">
            <input type="text" placeholder="Nomer Telepon" {...register("phone")} />
            <p className="form_error">{errors.phone?.message}</p>
          </div>
        </div>
      </div>
      <div className="luminix-main-field-textarea">
        <textarea
          className="button-text"
          placeholder="Isi Pesan"
          {...register("message")}
        ></textarea>
        <p className="form_error">{errors.message?.message}</p>
      </div>

      <button
        className="luminix-default-btn extra-btn4 pill"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <RightArrawWhitIcon />
      </button>
    </form>
  );
}
