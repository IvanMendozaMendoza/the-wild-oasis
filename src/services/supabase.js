import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jyubyfnrwdyivuvjujmb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5dWJ5Zm5yd2R5aXZ1dmp1am1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NzA2MzYsImV4cCI6MjAyOTU0NjYzNn0.VXCqOS1HtxD84UP8B1i0pImtIq1vdGRbRwwhESxCi14";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
