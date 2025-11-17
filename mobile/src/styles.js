import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#E589A8',
  background: '#FEF8FA',
  card: '#FFFFFF',
  text: '#212529',
  textLight: '#6c757d',
  shadow: '#E589A8',
};

export const globalStyles = StyleSheet.create({
  // ---- Loading ----
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  // ---- App.js ----
  header: {
    backgroundColor: colors.card,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    color: colors.primary,
    fontWeight: 'bold',
  },

  // ---- Home.js ----
  homeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  homeContent: {
    padding: 20,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  alunoCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  alunoCardText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '500',
  },

  // ---- Detalhe.js ----
  detalheContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  detalheCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    minWidth: '80%',
  },
  detalheName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  detalheId: {
    fontSize: 16,
    color: colors.textLight,
  },
});
