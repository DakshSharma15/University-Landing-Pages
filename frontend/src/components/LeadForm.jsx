import React, { useState } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE;

export default function LeadForm({ universityId }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    course: '',
    intakeYear: '2024',
    consent: false
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, universityId })
      });
      const data = await res.json();
      if (!res.ok) throw data;
      setStatus({ type: 'success', message: 'Your application has been submitted!' });
      setForm({ fullName: '', email: '', phone: '', state: '', course: '', intakeYear: '2024', consent: false });
    } catch (err) {
      const msg = err?.errors ? err.errors.map(x => x.msg).join(', ') : err.error || 'Submission failed';
      setStatus({ type: 'error', message: msg });
    }

    setLoading(false);
  };

  return (
    <form className="lead-form modern" onSubmit={submit}>
      {[
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'text', pattern: '\\d{10}' },
        { name: 'state', label: 'State', type: 'text' },
        { name: 'course', label: 'Course Interested', type: 'text' }
      ].map(field => (
        <div className="input-group" key={field.name}>
          <input
            type={field.type}
            name={field.name}
            value={form[field.name]}
            onChange={change}
            placeholder=" "
            pattern={field.pattern || undefined}
            required
          />
          <label>{field.label}</label>
        </div>
      ))}

      <div className="input-group">
        <select name="intakeYear" value={form.intakeYear} onChange={change}>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
        <label>Intake Year</label>
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" checked={form.consent} onChange={change} /> I consent to be contacted
      </label>

      <button type="submit" disabled={loading} className="apply-btn">
        {loading ? 'Submitting...' : 'Apply Now'}
      </button>

      {status && <p className={`form-status ${status.type}`}>{status.message}</p>}
    </form>
  );
}
