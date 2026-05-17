import api from './api';
import type { Product } from '@/types';

export const productService = {
  // Buscar todos os produtos
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get('/products');
    return response.data;
  },

  // Buscar produtos por categoria
  async getProductsByCategory(category: string): Promise<Product[]> {
    const response = await api.get('/products', { params: { category } });
    return response.data;
  },

  // Buscar produto por ID
  async getProductById(id: string): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // Buscar produtos por marca
  async getProductsByBrand(brand: string): Promise<Product[]> {
    const response = await api.get('/products', { params: { brand } });
    return response.data;
  },

  // Buscar produtos com filtros
  async searchProducts(query: string, filters?: {
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<Product[]> {
    const response = await api.get('/products/search', {
      params: { q: query, ...filters },
    });
    return response.data;
  },

  // Buscar produtos em destaque
  async getFeaturedProducts(): Promise<Product[]> {
    const response = await api.get('/products/featured');
    return response.data;
  },

  // Buscar últimas compras do usuário (recomendações)
  async getUserRecommendations(userId: string): Promise<Product[]> {
    const response = await api.get(`/users/${userId}/recommendations`);
    return response.data;
  },
};
