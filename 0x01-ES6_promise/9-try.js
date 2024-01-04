export default function guardrail(mathFunction) {
  const queu = [];

  try {
    queu.push(mathFunction());
  } catch (err) {
    queu.push(String(err));
  } finally {
    queu.push('Guardrail was processed');
  }

  return queu;
}
