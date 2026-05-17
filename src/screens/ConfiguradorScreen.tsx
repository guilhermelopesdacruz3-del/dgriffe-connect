import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '@/utils/constants';

export const ConfiguradorScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'Scanner de Receita',
      description: 'Fotografe a receita do oftalmologista',
      icon: '📸',
    },
    {
      number: 2,
      title: 'Provador Virtual',
      description: 'Experimente a armação com RA',
      icon: '📱',
    },
    {
      number: 3,
      title: 'Recomendação de Lentes',
      description: 'Escolha a lente ideal',
      icon: '👓',
    },
    {
      number: 4,
      title: 'Confirmar Pedido',
      description: 'Revise e finalize a compra',
      icon: '✓',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Configurador de Óculos</Text>
          <Text style={styles.subtitle}>
            Personalize seu óculos em 4 passos simples
          </Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressBar,
              { width: `${(currentStep / 4) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          Passo {currentStep} de 4
        </Text>

        {/* Steps */}
        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <View key={step.number}>
              <TouchableOpacity
                style={[
                  styles.stepCard,
                  currentStep === step.number && styles.stepCardActive,
                  currentStep > step.number && styles.stepCardCompleted,
                ]}
                onPress={() => setCurrentStep(step.number)}
              >
                <View style={styles.stepNumber}>
                  <Text
                    style={[
                      styles.stepNumberText,
                      currentStep >= step.number && styles.stepNumberTextActive,
                    ]}
                  >
                    {currentStep > step.number ? '✓' : step.number}
                  </Text>
                </View>
                <View style={styles.stepInfo}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepDescription}>
                    {step.description}
                  </Text>
                </View>
                <Text style={styles.stepIcon}>{step.icon}</Text>
              </TouchableOpacity>

              {/* Connector */}
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.connector,
                    currentStep > step.number && styles.connectorActive,
                  ]}
                />
              )}
            </View>
          ))}
        </View>

        {/* Step Content */}
        <View style={styles.stepContent}>
          {currentStep === 1 && (
            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>📸 Scanner de Receita</Text>
              <Text style={styles.contentText}>
                Tire uma foto clara da sua receita do oftalmologista. A IA lerá
                automaticamente o grau, cilindro e eixo.
              </Text>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Abrir Câmera</Text>
              </TouchableOpacity>
            </View>
          )}

          {currentStep === 2 && (
            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>📱 Provador Virtual</Text>
              <Text style={styles.contentText}>
                Escolha uma armação e use a Realidade Aumentada para ver como
                fica no seu rosto. O app também calcula a DNP automaticamente.
              </Text>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Ativar Câmera RA</Text>
              </TouchableOpacity>
            </View>
          )}

          {currentStep === 3 && (
            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>👓 Recomendação de Lentes</Text>
              <Text style={styles.contentText}>
                Com base no seu grau, recomendamos a melhor espessura de lente
                para evitar o efeito "fundo de garrafa". Escolha a marca e os
                tratamentos desejados.
              </Text>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Selecionar Lentes</Text>
              </TouchableOpacity>
            </View>
          )}

          {currentStep === 4 && (
            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>✓ Confirmar Pedido</Text>
              <Text style={styles.contentText}>
                Revise todos os detalhes do seu óculos personalizado antes de
                finalizar a compra. Você receberá notificações sobre o status
                do pedido.
              </Text>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Revisar & Comprar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={[
              styles.navButton,
              currentStep === 1 && styles.navButtonDisabled,
            ]}
            onPress={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            <Text style={styles.navButtonText}>← Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
              styles.navButtonPrimary,
              currentStep === 4 && styles.navButtonComplete,
            ]}
            onPress={() => setCurrentStep(Math.min(4, currentStep + 1))}
          >
            <Text style={styles.navButtonText}>
              {currentStep === 4 ? 'Finalizar' : 'Próximo →'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 4,
  },
  progressContainer: {
    marginHorizontal: 16,
    height: 6,
    backgroundColor: COLORS.surface,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  stepsContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  stepCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  stepCardCompleted: {
    borderColor: COLORS.success,
    backgroundColor: `${COLORS.success}10`,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
    marginRight: 12,
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  stepNumberTextActive: {
    color: COLORS.primary,
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  stepDescription: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  stepIcon: {
    fontSize: 24,
  },
  connector: {
    width: 2,
    height: 16,
    backgroundColor: COLORS.border,
    marginLeft: 19,
    marginVertical: 4,
  },
  connectorActive: {
    backgroundColor: COLORS.primary,
  },
  stepContent: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  contentBox: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 20,
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.background,
  },
  navigationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonPrimary: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  navButtonComplete: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
