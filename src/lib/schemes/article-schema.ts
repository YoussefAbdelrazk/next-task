import { z } from 'zod';

// General Information Schema
export const generalInformationSchema = z.object({
  topicName: z.string().min(1, 'Topic name is required'),
  articleCategory: z.string().min(1, 'Article category is required'),
  typology: z.array(z.string()).min(1, 'At least one typology must be selected'),
  discipline: z.array(z.string()).min(1, 'At least one discipline must be selected'),
  region: z.string().min(1, 'Region is required'),
  latitude: z.string().min(1, 'Latitude is required'),
  longitude: z.string().min(1, 'Longitude is required'),
  altitude: z.string().min(1, 'Altitude is required'),
  accuracy: z.string().min(1, 'Accuracy is required'),
  architects: z
    .array(
      z.object({
        fullname: z.string().min(1, 'Architect name is required'),
      }),
    )
    .optional(),
  clients: z
    .array(
      z.object({
        fullname: z.string().min(1, 'Client name is required'),
      }),
    )
    .optional(),
  dates: z
    .array(
      z.object({
        typeOfDate: z.string().min(1, 'Type of date is required'),
        dateType: z.enum(['year-month-day', 'year-month', 'year']),
        date: z.string().min(1, 'Date is required'),
      }),
    )
    .min(1, 'At least one date is required'),
  summary: z.string().min(1, 'Summary is required'),
});

// Body Schema
export const bodySchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  paragraph: z
    .string()
    .min(1, 'Paragraph is required')
    .max(1000, 'Paragraph must be less than 1000 characters'),
  attachments: z
    .array(
      z.object({
        file: z.any().optional(),
        description: z
          .string()
          .min(1, 'Description is required')
          .max(500, 'Description must be less than 500 characters'),
      }),
    )
    .max(5, 'Maximum 5 images allowed')
    .optional(),
});

// References & Acknowledgements Schema
export const referencesSchema = z.object({
  tags: z.string().optional(),
  bibliography: z
    .array(
      z.object({
        sourceDescription: z.string().min(1, 'Source description is required'),
        linkReference: z.string().min(1, 'Link/Reference is required'),
      }),
    )
    .optional(),
  additionalAuthors: z
    .array(
      z.object({
        name: z.string().min(1, 'Author name is required'),
      }),
    )
    .optional(),
});

// Complete Article Schema
export const articleSchema = z.object({
  generalInformation: generalInformationSchema,
  body: bodySchema,
  references: referencesSchema,
});

export type GeneralInformationFormData = z.infer<typeof generalInformationSchema>;
export type BodyFormData = z.infer<typeof bodySchema>;
export type ReferencesFormData = z.infer<typeof referencesSchema>;
export type ArticleFormData = z.infer<typeof articleSchema>;

// Form step types
export type FormStep = 'general' | 'body' | 'references';

// Typology options
export const typologyOptions = [
  'Cultural',
  'Recreational',
  'Religious',
  'Sports',
  'Educational',
  'Healthcare',
  'Hospitality',
  'Commercial',
  'Public',
  'Residential',
  'Other',
] as const;

// Discipline options
export const disciplineOptions = [
  'Architecture',
  'Landscape Architecture',
  'Urban Design & Planning',
  'Industrial Design',
  'Interior Design',
  'Graphic Design',
] as const;

// Region options
export const regionOptions = [
  'Al-Madinah',
  'Riyadh',
  'Jeddah',
  'Dammam',
  'Mecca',
  'Taif',
  'Tabuk',
  'Hail',
  'Al-Baha',
  'Jazan',
  'Najran',
  'Al-Jouf',
  'Northern Borders',
  'Qassim',
  'Asir',
  'Eastern Province',
] as const;

// Article category options
export const articleCategoryOptions = [
  'General',
  'Historical',
  'Modern',
  'Contemporary',
  'Traditional',
  'Cultural',
  'Religious',
  'Commercial',
  'Residential',
  'Public',
] as const;
