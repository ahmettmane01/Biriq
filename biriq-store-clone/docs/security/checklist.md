# Security checklist
- Never commit service-role keys.
- Use RLS for customer-owned records.
- Validate all order inputs server-side.
- Verify payment webhooks before changing order state.
- Keep admin authorization server-side.
- Rate-limit public code-check endpoints.
