export default function routeRedirection (req, resolvedUrl) {
  const requireAuth = ['/about'];
  const requireNoAuth = ['/login', '/signup']

  if (requireAuth.includes(resolvedUrl)) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
}