/* Configuração compartilhada do Supabase — usada pelo index.html (loja) e admin.html (painel) */
const SUPABASE_URL = "https://rbbejrxurfdpnpwugkpo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYmVqcnh1cmZkcG5wd3Vna3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwOTQzMDQsImV4cCI6MjEwMjY3MDMwNH0.1-y7r6kt8N3IwmjjDy6vPLZq48KNyEsfiD_rWAwft0A";

window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
