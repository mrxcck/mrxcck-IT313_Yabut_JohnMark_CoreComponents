import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import StudentCard from './StudentCard';

// Starter data provided in Laboratory 6 guidelines
const INITIAL_STUDENTS = [
  { id: "s1", name: "Ana Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1", flagged: true },
  { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2", flagged: false },
  { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3", flagged: false },
  { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4", flagged: false },
  { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=5", flagged: false },
];

/**
 * StudentDirectory Component
 * Parent component managing student list state, search query state, and advising flags.
 */
export default function StudentDirectory() {
  // State 1: Students array containing id, name, year, photoUrl, and flagged status
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  // State 2: Query state for search bar
  const [searchQuery, setSearchQuery] = useState('');

  // Handler to toggle flagged status for an individual student in parent state
  const handleToggleFlag = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  // Conditional case-insensitive filtering based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1E2348" />

      {/* Screen Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Directory</Text>
        <Text style={styles.headerSubtitle}>
          {students.length} students this term
        </Text>
      </View>

      {/* Search Input Box */}
      <View style={styles.searchContainer}>
        {/*
          CONTROLLED TEXTINPUT (Requirement 4):
          Bound to query state via `value` and `onChangeText`.
          
          EXPERIMENT NOTE (Requirement 6):
          To demonstrate the uncontrolled input behavior, remove `value` and `onChangeText`.
          Notice that typing into the field updates native visual text, but because
          React state is not updated, the list below does not filter.
          Restoring `value` and `onChangeText` makes it controlled again!
        */}
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search students..."
          placeholderTextColor="#8E9AA8"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
      </View>

      {/* Scrollable list of Student Cards */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={handleToggleFlag}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No matching students</Text>
            <Text style={styles.emptySubtitle}>
              No students found matching "{searchQuery}".
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: '#1E2348',
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#171B38',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#CBD5E1',
    fontSize: 13,
    marginTop: 2,
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  searchInput: {
    height: 44,
    backgroundColor: '#F1F4F9',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#1E293B',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 12,
    paddingBottom: 24,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
  },
});
