export default function Toggle({ toggle, children }) {
  const toggleValue = window && window.toggles && window.toggles[toggle]
  return toggleValue ? children : null
}
