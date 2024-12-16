import React, { useState } from 'react';
import { Dialog } from '@radix-ui/react-dialog';
import { Input } from '@radix-ui/react-input';
import { Button } from '@radix-ui/react-button';
import { useForm, Controller } from 'react-hook-form';

const CreateProjectModal: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Adicionar Projeto</Button>
      </Dialog.Trigger>
      <Dialog.Content className="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-lg font-bold mb-4">Criar Novo Projeto</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome do Projeto
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Nome do projeto é obrigatório' }}
              render={({ field, fieldState }) => (
                <div>
                  <Input id="name" {...field} className="w-full p-2 border border-gray-300 rounded" />
                  {fieldState?.error && <p className="text-red-600 text-sm">{fieldState.error.message}</p>}
                </div>
              )}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input id="description" {...field} className="w-full p-2 border border-gray-300 rounded" />}
            />
          </div>
          <Button type="submit">Criar Projeto</Button>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default CreateProjectModal;
