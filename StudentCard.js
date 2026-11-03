import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

/**
 * StudentCard Component
 * Displays an individual student's details and an interactive advising flag button.
 *
 * Props:
 * - id: string
 * - name: string
 * - year: string
 * - photoUrl: string
 * - flagged: boolean
 * - onToggleFlag: (id: string) => void
 */
export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.cardContainer}>
      {/* Student Photo with explicit dimensions and rounded corners */}
      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
        resizeMode="cover"
      />

      {/* Student Info: Name and Year Level */}
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.yearText}>{year}</Text>
      </View>

      {/* Flag for Advising Interactive Control */}
      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged ? styles.flagButtonActive : styles.flagButtonInactive,
          pressed && styles.flagButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel={flagged ? `Unflag ${name} for advising` : `Flag ${name} for advising`}
      >
        <Text
          style={[
            styles.flagButtonText,
            flagged ? styles.flagButtonTextActive : styles.flagButtonTextInactive,
          ]}
        >
          {flagged ? '★ Flagged' : '☆ Flag'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // Flexbox used to align photo, text, and flag button side by side
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    // Elevation for Android and shadow for iOS / Web
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
  },
  photo: {
    // Explicit width, height, and rounded corners required by React Native
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CBD5E1', // Fallback color while image loads
  },
  infoContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 2,
  },
  yearText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  flagButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 84,
  },
  flagButtonInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
  },
  flagButtonActive: {
    backgroundColor: '#D97706', // Warm amber / orange as seen in wireframe
    borderColor: '#B45309',
  },
  flagButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  flagButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  flagButtonTextInactive: {
    color: '#475569',
  },
  flagButtonTextActive: {
    color: '#FFFFFF',
  },
});
